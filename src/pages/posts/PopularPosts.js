import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { axiosReq } from '../../api/axiosDefaults';
import appStyles from "../../App.module.css";
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Asset from '../../components/Asset';
import PostSmall from './PostSmall';

const PopularPosts = (props) => {
    const { mobile, setPosts } = props;
    console.log(props);
    const [postData, setPostData] = useState({
        pagePost: { results: [] },
        popularPosts: { results: [] },
    });
    const { popularPosts } = postData;
    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(
                    "/posts/?ordering=-likes_count"
                );
                setPostData((prevState) => ({
                    ...prevState,
                    popularPosts: data,
                }));
            } catch (err) {
                // console.log(err)
            }
        };
        handleMount();
    }, [currentUser]);

    return (
        <Container className={`${appStyles.Contentmini} ${mobile && "d-lg-none text-center mt-3"
            }`}
        >
            {popularPosts.results.length ? (
                <>
                    <p className={appStyles.Liked}>Most liked posts</p>
                    {mobile ? (
                        <div className="d-flex justify-content-around">
                            {popularPosts.results.slice(0, 2).map((post) => (
                                <PostSmall key={post.id} post={post} mobile />
                            ))}
                        </div>
                    ) : (
                        popularPosts.results.slice(0, 3).map((post) => (
                            <PostSmall key={post.id} post={post} setPosts={setPosts} />
                        ))
                    )}
                </>
            ) : (
                <Asset spinner />
            )}
        </Container>
    );
};

export default PopularPosts;