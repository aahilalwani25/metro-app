import { Navigation } from "react-native-navigation";

async function push(screen_name, componentId, pass_data=null){
    await Navigation.push(componentId,{
        component:{
            name: screen_name,
            passProps: pass_data,
            options:{
                
                animations:{
                    push:{
                        content:{
                            alpha:{
                                from:0,
                                to:1,
                                duration:500
                            }
                        }
                    }
                }
            }
        }
    })
}

export default {
    push
}