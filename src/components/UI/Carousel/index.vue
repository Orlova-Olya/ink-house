<template>
  <div v-if="slotIsNotEmpty" class="ui-carousel">
    <p v-if="!slotIsCorrect" class="ui-carousel__error text">
      Содержимое карусели должно состоять только из элементов li.
    </p>

    <div
      class="ui-carousel__list-container"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="finishMouseEvent"
      @mouseleave="finishMouseEvent"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
      @touchcancel="touchend"
      @keydown.tab="handleKeydownTab"
    >
      <ul
        ref="list"
        class="ui-carousel__list"
        :class="{ moving: moveDelta !== null && moveDelta !== 0 }"
        :style="{
          transform: `translateX(${listTranslateX})`,
          transitionDuration: `${transitionDuration}ms`,
          '--item-border-right': listItemBorderRight,
          '--item-width': listItemWidth
        }"
      >
        <slot />
      </ul>
    </div>

    <div v-if="pagesNumber > 1" class="ui-carousel__pagination-row">
      <div v-if="pagesNumber > 1" class="ui-carousel__arrow-buttons-container">
        <!--  && $store.state.screenWidth >= 768 -->
        <button
          aria-label="Перейти на предыдущий слайд"
          class="ui-carousel__arrow-button"
          :class="{ disabled: currentPageIndex == 0 }"
          :disabled="currentPageIndex == 0"
          @click="currentPageIndex--"
        >
          <!-- <UIIcon name="arrow_no-line_right" class="ui-carousel__arrow reverse" /> -->
        </button>
        <span class="text">{{ currentPageIndex + 1 }} из {{ pagesNumber }}</span>
        <button
          aria-label="Перейти на следующий слайд"
          class="ui-carousel__arrow-button reverse"
          :class="{ disabled: currentPageIndex == pagesNumber - 1 }"
          :disabled="currentPageIndex == pagesNumber - 1"
          @click="currentPageIndex++"
        >
          <!-- <UIIcon name="arrow_no-line_right" class="ui-carousel__arrow" /> -->
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemsOnSlide: {
      type: Array,
      default: () => {
        return [3, 2, 2, 1]
      },
      validator(array) {
        return array.length == 4 && array.every(value => typeof value == 'number')
      }
    },
    listHeight: {
      type: Number,
      default: 300
    }
  },

  data: () => ({
    currentPageIndex: 0,
    pagesNumber: 1,
    adaptivePropertiesIndex: 0,

    transitionDuration: 0,

    focusableElements: {
      first: null,
      last: null
    },

    moveDelta: null,
    mouseEvent: {
      startX: null
    },
    swipe: {
      started: false,
      detecting: false,
      touch: null,
      x: null,
      y: null
    }
  }),

  mounted() {
    if (!this.slotIsNotEmpty) return
    this.setAdaptiveProperties()
    setTimeout(() => {
      this.setProperties()
    }, 0)
    window.addEventListener('resize', this.setAdaptiveProperties)

    const allFocusableElementInList = this.$refs.list.querySelectorAll('a, button, input')
    if (allFocusableElementInList.length) {
      this.focusableElements.first = allFocusableElementInList[0]
      this.focusableElements.first.addEventListener('focus', () => this.handleElementFocus('first'))
    }
    if (allFocusableElementInList.length > 1) {
      this.focusableElements.last = allFocusableElementInList[allFocusableElementInList.length - 1]
      this.focusableElements.last.addEventListener('focus', () => this.handleElementFocus('last'))
    }
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.setAdaptiveProperties)

    if (this.focusableElements.first) {
      this.focusableElements.first.removeEventListener('focus', this.handleElementFocus)
    }
    if (this.focusableElements.last) {
      this.focusableElements.last.removeEventListener('focus', this.handleElementFocus)
    }
  },

  computed: {
    slotIsNotEmpty() {
      return this.$slots.default !== undefined
    },
    slotIsCorrect() {
      if (!this.slotIsNotEmpty) return false
      return this.$slots.default()[0].children.every(item => item.type === 'li')
    },

    itemsOnSlideNow() {
      return this.itemsOnSlide[this.adaptivePropertiesIndex]
    },
    listGap() {
      return [30, 30, 30, 0][this.adaptivePropertiesIndex]
    },

    listItemBorderRight() {
      return this.listGap + 'px solid transparent'
    },
    listItemWidth() {
      return `calc((100vw - (100vw - 100%) + ${this.listGap}px) / ${this.itemsOnSlideNow})`
    },

    listTranslateX() {
      if (this.moveDelta === null) {
        return `calc(-${this.currentPageIndex} * (100% + ${this.listGap}px))`
      }
      return `calc(-${this.currentPageIndex} * (100% + ${this.listGap}px) + ${this.moveDelta}px)`
    }
  },

  watch: {
    currentPageIndex(newValue, oldValue) {
      this.transitionDuration = Math.abs(newValue - oldValue) > 1 ? 1500 : 750

      setTimeout(() => {
        this.transitionDuration = 0
      }, this.transitionDuration)
    }
  },

  methods: {
    resetProperties() {
      this.currentPageIndex = 0
      this.setProperties()
    },

    setAdaptiveProperties() {
      const adaptivePropertiesIndex_prev = this.adaptivePropertiesIndex
      if (window.innerWidth >= 1200) {
        this.adaptivePropertiesIndex = 0
      } else if (window.innerWidth >= 768) {
        this.adaptivePropertiesIndex = 1
      } else if (window.innerWidth >= 576) {
        this.adaptivePropertiesIndex = 2
      } else {
        this.adaptivePropertiesIndex = 3
      }

      if (adaptivePropertiesIndex_prev !== this.adaptivePropertiesIndex) {
        this.setProperties()
      }
    },

    setProperties() {
      setTimeout(() => {
        this.pagesNumber = Math.ceil(this.$refs.list.childElementCount / Math.floor(this.itemsOnSlideNow))
        if (this.currentPageIndex > this.pagesNumber - 1) {
          this.currentPageIndex = this.pagesNumber - 1
        }
      }, 1)
    },

    handleElementFocus(order) {
      if (order == 'first' && this.currentPageIndex) {
        this.currentPageIndex = 0
        return
      }
      if (order == 'last' && this.currentPageIndex < this.pagesNumber - 1) {
        this.currentPageIndex = this.pagesNumber - 1
      }
    },

    handleKeydownTab() {
      setTimeout(() => {
        const focusedElement = document.activeElement
        if (!focusedElement.closest('.ui-carousel__list')) return

        const listItems = this.$refs.list.childNodes
        let focusedElementLiIndex

        for (let i = 0; i < this.$refs.list.childNodes.length; i++) {
          if (listItems[i].contains(focusedElement)) {
            focusedElementLiIndex = i
          }
        }

        const focusedElementPageIndex = Math.floor(focusedElementLiIndex / Math.floor(this.itemsOnSlideNow))
        if (focusedElementPageIndex != this.currentPageIndex) {
          this.currentPageIndex = focusedElementPageIndex
        }
      }, 0)
    },

    /*↓ Обработка событий мыши ↓*/
    handleMouseDown(event) {
      this.mouseEvent.startX = event.clientX
    },
    handleMouseMove(event) {
      if (this.mouseEvent.startX === null) return

      let delta = event.clientX - this.mouseEvent.startX

      /* Если листать некуда, делим смещение на некоторую величину для создания визуального эффекта «сопротивления движению» страницы.*/
      if ((delta > 0 && !this.currentPageIndex) || (delta < 0 && this.currentPageIndex == this.pagesNumber - 1)) {
        delta = delta / 5
      }

      this.moveDelta = delta
    },
    finishMouseEvent(event) {
      if (this.mouseEvent.startX === null) return

      if (this.moveDelta > 0 && this.currentPageIndex) {
        this.currentPageIndex--
      }
      if (this.moveDelta < 0 && this.currentPageIndex != this.pagesNumber - 1) {
        this.currentPageIndex++
      }

      this.mouseEvent.startX = null
      this.moveDelta = null
    },
    /*↑ Обработка событий мыши ↑*/

    /*↓ Обработка touch событий ↓*/
    touchstart(event) {
      if (event.touches.length != 1 || this.swipe.started) {
        return
      }

      this.swipe.detecting = true

      this.swipe.touch = event.changedTouches[0]
      this.swipe.x = this.swipe.touch.pageX
      this.swipe.y = this.swipe.touch.pageY
    },

    touchmove(event) {
      if (
        (!this.swipe.started && !this.swipe.detecting) ||
        event.changedTouches[0].identifier !== this.swipe.touch.identifier
      ) {
        return
      }

      if (this.swipe.detecting) {
        this.detect(event)
      }
      if (this.swipe.started) {
        this.draw(event)
      }
    },
    detect(event) {
      const newX = event.changedTouches[0].pageX
      const newY = event.changedTouches[0].pageY

      if (Math.abs(this.swipe.x - newX) >= Math.abs(this.swipe.y - newY)) {
        event.preventDefault()

        this.swipe.started = true
      }

      this.swipe.detecting = false
    },
    draw(event) {
      event.preventDefault()

      const newX = event.changedTouches[0].pageX
      let delta = newX - this.swipe.x

      /* Если листать некуда, делим смещение на некоторую величину для создания визуального эффекта «сопротивления движению» страницы.*/
      if ((delta > 0 && !this.currentPageIndex) || (delta < 0 && this.currentPageIndex == this.pagesNumber - 1)) {
        delta = delta / 5
      }

      this.moveDelta = delta
    },

    touchend(event) {
      if (!this.swipe.started || event.changedTouches[0].identifier !== this.swipe.touch.identifier) {
        return
      }

      event.preventDefault()

      if (this.moveDelta > 0 && this.currentPageIndex) {
        this.currentPageIndex--
      }
      if (this.moveDelta < 0 && this.currentPageIndex != this.pagesNumber - 1) {
        this.currentPageIndex++
      }

      this.swipe.started = false
      this.swipe.detecting = false
      this.swipe.touch = null
      this.swipe.x = null
      this.swipe.y = null
      this.moveDelta = null
    }
    /*↑ Обработка touch событий ↑*/
  }
}
</script>

<style lang="scss">
.ui-carousel {
  &__error {
    color: red;

    & ~ * {
      display: none !important;
    }
  }

  &__list-container {
    overflow: hidden;

    * {
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      -webkit-user-drag: none;
      -webkit-app-region: no-drag;
      user-select: none;
    }
  }
  &__list {
    display: flex;
    align-items: stretch;

    width: 100%;

    list-style: none;

    & > * {
      flex-shrink: 0;

      width: var(--item-width);

      border-right: var(--item-border-right);
      background-clip: padding-box;
    }

    &.moving * {
      pointer-events: none;
    }
  }

  &__pagination-row {
    display: flex;
    justify-content: center;

    @media (min-width: 576px) {
      margin-top: 30px;
    }
    @media (max-width: 767px) and (min-width: 560px) {
      margin-top: 25px;
    }
    @media (max-width: 559px) {
      margin-top: 20px;
    }

    @media (min-width: 768px) {
      /*Для позиционирования по центру ui-carousel__arrow-buttons-container*/
      position: relative;
    }
  }

  &__arrow-buttons-container {
    display: flex;
    align-items: center;
    flex-shrink: 0;

    gap: 8px;
  }
  &__arrow-button {
    width: 36px;
    height: 36px;

    cursor: pointer;
    transition-duration: 100ms;

    border: none;
    outline: none;

    clip-path: polygon(90% 10%, 10% 50%, 90% 90%);

    &:not(.disabled) {
      background-color: var(--green_dark);
    }
    &.disabled {
      pointer-events: none;

      background-color: var(--gray);
    }
    &:hover {
      background-color: var(--green);
    }

    &.reverse {
      transform: scaleX(-1);
    }
  }
}
</style>
