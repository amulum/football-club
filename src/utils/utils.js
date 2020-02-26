class Utils{
  filter(selected, list) {
    list.filter(item => {
      if (list.includes(selected)) {
        return item
      }
    })
  }
}

export default Utils