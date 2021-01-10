const customSort = (array, order = "default") => {
      const sortArr = [...array];
      sortArr.sort((a, b) => {
        if (order === 'default') return sortArr;
        if (order === 'asc') return a.age - b.age;
        if (order === 'desc') return b.age - a.age;
      })
    
      return sortArr;
    }
    
    export default customSort;