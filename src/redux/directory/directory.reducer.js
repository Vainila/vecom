const INITIAL_STATE = {
   sections: [
      {
         id: 0,
         name: "HATS",
         imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
         url: "shop/hats",
      },
      {
         id: 1,
         name: "JACKETS",
         imgUrl:
            "https://images.unsplash.com/photo-1600247354058-a55b0f6fb720?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
         url: "shop/jackets",
      },
      {
         id: 2,
         name: "SNEAKERS",
         imgUrl:
            "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG5pa2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
         url: "shop/sneakers",
      },
      {
         id: 3,
         name: "WOMEN",
         imgUrl: "https://i.ibb.co/GCCdy8t/womens.png",
         imgSize: "menu-item--lrg",
         url: "shop/women",
      },
      {
         id: 4,
         name: "MEN",
         imgUrl: "https://i.ibb.co/R70vBrQ/men.png",
         imgSize: "menu-item--lrg",
         url: "shop/men",
      },
   ],
};

const directoryReducer = (state = INITIAL_STATE, action)=>{
   switch(action.type){
      default: 
         return state;
   }
}
export default directoryReducer;