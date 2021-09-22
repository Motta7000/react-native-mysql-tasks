import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'



const TaskItem = ({ task,handleDelete }) => {

    /*const handleSubmit = async () => {
       
       await deleteTask(task)
       this.force
    } */
    const navigation = useNavigation()
        
    
    return (
        <View style={style.itemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen',{id:task.id})} >
                <Text style={style.itemTitle}>{task.title}</Text>
                <Text style={style.itemDescription}>{task.description}</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => handleDelete(task.id)}>Delete</Text>
            </TouchableOpacity>

        </View>
    );
};

/*      backgroundColor: '#3333',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10,*/

const style = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor:'#432200',
        margin:10
    },
    container: {
        flex: .5,
        flexDirection: 'row',
        justifyContent: 'flex-start', //replace with flex-end or center
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    },
    container2: {
        flex: .5,
        flexDirection: 'row',
        alignItems: 'flex-start' //replace with flex-end or center
    },
    itemTitle: {
        color: '#ffffff',
        paddingLeft: 10,
        paddingTop:10
    },
    itemDescription:{
        color: '#ffffff',
        paddingLeft: 10,
        paddingBottom:10
    }
})

export default TaskItem


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    button: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight:5,
        paddingLeft: 5,
        marginRight: 5,
        borderRadius: 5,
        marginBottom: 3,
        backgroundColor: '#10ac84'

    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    }

})
