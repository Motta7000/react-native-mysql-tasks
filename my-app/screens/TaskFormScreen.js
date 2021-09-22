import React,{useState,useEffect} from 'react'
import { View, Text,TextInput,StyleSheet,TouchableOpacity } from 'react-native'
import { saveTask,getTask,updateTask } from '../api'
import Layout from '../components/Layout'

const TaskFormScreen = ({navigation,route}) => {

    
    const [task,setTask] = useState({
        title:'',
        description:''
    })
    const [editing, setEditing] = useState(false);


const handleChange = (name,value) =>{
    setTask({...task,[name]:value})
}
const handleSubmit = async () => {
    console.log(task)
  
    try {
        if (!editing)
        {
        await saveTask(task)
        }
        else
        {
         await updateTask(route.params.id,task)
        }
         navigation.navigate('HomeScreen')
    } catch (error) {
        console.log(error)
    }

}


 
 useEffect(() => {
    if (route.params && route.params.id)
    {
        navigation.setOptions({headerTitle:'Updating a Task'});
       // console.log (editing)
        
       setEditing(true);
       
        (async () => {
            const res = await getTask(route.params.id);
            console.log(res)
            setTask({title:res.title,description:res.description})
        })();
    }
  
        
   
}, [])

    return (
        <Layout>
            <TextInput style = {styles.input}
                placeholder="Write a Title"
                placeholderTextColor ='white'
                onChangeText={text=>handleChange('title',text)}
                value={task.title}
            />
            <TextInput style = {styles.input}
                placeholder="Write a Description"
                placeholderTextColor ='white'
                onChangeText={text=>handleChange('description',text)}
                value={task.description}
            />
            {
                !editing ? (
                <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Save Task</Text>
            </TouchableOpacity>) 
            : (    <TouchableOpacity style={styles.buttonUpdate} onPress={handleSubmit}>
                <Text style={styles.buttonText}>UPDATE</Text>
            </TouchableOpacity>)
            }

        </Layout>
    )
}

const styles = StyleSheet.create({
    input:{
        width:'90%',
        marginBottom:7,
        fontSize:14,
        borderWidth:1,
        borderColor:'#10ac84',
        height:30,
        color:'white',
        textAlign:'center',
        padding:6,
        borderRadius:5
    },
    buttonSave:{
        paddingTop:10,
        paddingBottom:10,
        borderRadius:5,
        marginBottom:3,
        backgroundColor:'#10ac84',
        width:'90%'
    },
    buttonUpdate:{
        paddingTop:10,
        paddingBottom:10,
        borderRadius:5,
        marginBottom:3,
        backgroundColor:'green',
        width:'90%'
    },
    buttonText:{
        textAlign:'center',
        color:'white'
    }
   
})

export default TaskFormScreen
