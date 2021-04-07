import types from "./types/types"

let theme={
    isLightTheme:true,
    light:{
        background:"white",
        syntax:"#f1356d",
        color:"black"
        
    },
    dark:{
        background:"#120E43",
        syntax:"#f1356d",
        color:"white"
    }
}
function themeToggle(state=theme,action){
 switch(action.type){
     case types.toggle_Theme:return(
         {
             ...state,
             isLightTheme:!state.isLightTheme
         }
     )
     default :return (state)
 }

}
export default themeToggle