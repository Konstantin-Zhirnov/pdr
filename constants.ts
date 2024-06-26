export const animation = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: custom || 0.6 },
  }),
}

export const imageAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7 },
  }),
}
