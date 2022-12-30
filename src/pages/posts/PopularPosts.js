import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";



const PopularPosts = (props) => {
    const {mobile, setPosts} = props;
    console.log(props)
    const[postData, setPostData] = useState({
        pagePost: {results:[] },
        PopularPosts: {results: [] },
    });
    const { PopularPosts } = postData;
    const currentUser = useCurrentUser()

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
        }
        handleMount()
    }, [currentUser]);

    return (
        <Container className={`${appStyles.Content} ${
            mobile && "d-lg-none text-center mb-3"
        }`}
        >
        {popularPosts.results.length ? (
                <>
                    <p className={appStyles.SubTitle}>Most liked posts</p>
                        {mobile ? (
                            <div className="d-flex justify-content-around">
                            {popularPosts.results.slice(0,1).map((post) => (
                                <PostMini key={post.id} post={post} mobile />
                        ))}
                        </div>
                        ):(
                            popularPosts.results.slice(0,3).map((post) => (
                                <PostMini key={post.id} post={post} setPosts={setPosts}/>
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