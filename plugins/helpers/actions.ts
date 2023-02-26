const actions = {
    refresh: () => {
        if(window && typeof(window) !== 'undefined') {
          window.location.reload();
        }
    },
    follow: (id) => {
      if(window && typeof(window) !== 'undefined') {
        window.location.hash = '#' + id;
      }
    }
}

export default actions;