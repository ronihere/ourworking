export const PageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
    },
  },
};

export const TitleAnimation = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const FadeAnimation = {
  hidden: {
    opacity: 0,
    x:200,
  },
  show: {
    x:0,
    opacity: 0.75,
    transition: {
      duration: 1,
      ease: "easeOut",
    }
  }
}

export const PhotoAnimation = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration:1.25,
    }
  }
}

export const LineAnimation = {
  hidden: {
    width: '0%',
  },
  show: {
    width: '100%',
    transition:{
      duration: 1,
    }
  }
}
