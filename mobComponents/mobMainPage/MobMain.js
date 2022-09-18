import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View, FlatList, Dimensions, ScrollView } from 'react-native';
import MobPostItem from './MobPostItem';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;


const MobMain = () => {


    const requestUrl = {
        users: 'https://jsonplaceholder.typicode.com/users/',
        posts: 'https://jsonplaceholder.typicode.com/posts',
        photos: 'https://jsonplaceholder.typicode.com/photos'
    }
    const [users, setUsers] = useState([]);
    const [isUsersLoaded, setUsersLoaded] = useState(false);

    const [posts, setPosts] = useState([]);
    const [isPostsLoaded, setPostsLoaded] = useState(false);

    const [photos, setPhotos] = useState([]);
    const [isPhotosLoaded, setPhotosLoaded] = useState(false);

    const getUsers = async () => {
        try {
            const response = await fetch(requestUrl.users);
            const json = await response.json();
            setUsers(json);
        } catch (error) {
            console.error(error);
        } finally {
            setUsersLoaded(true);
        }
    }
    const getPosts = async () => {
        try {
            const response = await fetch(requestUrl.posts);
            const json = await response.json();
            setPosts(json);
        } catch (error) {
            console.error(error);
        } finally {
            setPostsLoaded(true);
        }
    }
    const getPhotos = async () => {
        try {
            const response = await fetch(requestUrl.photos);
            const json = await response.json();
            setPhotos(json);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setPhotosLoaded(true);
        }
    }

    useEffect(() => {
        getUsers();
        getPosts();
        getPhotos();
    }, []);

    return (
        <View>
            {(isPhotosLoaded && isPostsLoaded && isUsersLoaded) ?
                (<View style={styles.main}>
                    <ScrollView>
                        <FlatList
                            data={users}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) => (
                                <View style={{ flexBasis: '100%' }}>
                                    <MobPostItem
                                        name={item.name}
                                        company={item.company.name}
                                        title={posts.find(post => post.userId === item.id).title}
                                    />
                                </View>
                            )}
                        />
                    </ScrollView>
                </View>
                )
                :
                <ActivityIndicator style={{ margin: 200 }} size='large' color='#27569C' />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: (0.05 * screenWidth),
    }
})

export default MobMain