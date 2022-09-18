import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View, FlatList, Dimensions, ScrollView } from 'react-native';
import PadPostItem from './PadPostItem';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const PadMain = () => {


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
        <View style={{ flex: 1 }}>
            {(isPhotosLoaded && isPostsLoaded && isUsersLoaded) ?
                (<View style={styles.main}>
                    <FlatList
                        numColumns={2}
                        data={users}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View style={{ flexBasis: '50%' }}>
                                <PadPostItem
                                    imageSrc={photos.find(photo => photo.albumId === item.id).thumbnailUrl}
                                    name={item.name}
                                    company={item.company.name}
                                    title={posts.find(post => post.userId === item.id).title}
                                    body={posts.find(post => post.userId === item.id).body}
                                />
                            </View>
                        )}
                    />
                </View>)
                :
                <ActivityIndicator style={{ margin: 200 }} size='large' color='#27569C' />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: (0.05 * screenWidth),
    }
})

export default PadMain