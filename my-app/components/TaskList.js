import React, { useState, useEffect } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import TaskItem from './TaskItem'
import { getTasks } from '../api'
import { deleteTask } from '../api'

const TaskList = () => {
    const [tasks, setTasks] = useState([])

    const [refreshing, setRefreshing] = useState(false)

    const loadTasks = async () => {

        const data = await getTasks()
  
        setTasks(data)
    }
    useEffect(() => {

        loadTasks()
        console.log('cargoo')
    }, [])

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true)
        await loadTasks()
        setRefreshing(false)

    })

    const handleDelete = async (id) => {
        await deleteTask(id)
        loadTasks()
    }


    const renderItem = ({ item }) => {
        return <TaskItem task={item} handleDelete={handleDelete} />;
    };
    return (
        <FlatList
            style={{ width: '100%' }}
            data={tasks}
            keyExtractor={(item) => item.id + ''}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    colors={['#78e08f']}
                    onRefresh={onRefresh}
                    progressBackgroundColor="#0a3d62"
                />
            }
        />
    )
}

export default TaskList
