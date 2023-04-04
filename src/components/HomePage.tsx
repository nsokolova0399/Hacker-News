import React, {useCallback, useEffect, useState} from "react"
import { NewsItem } from "./NewsItem"
import { Story } from "./types"
import { fetchStories, fetchTopStoriesIds} from "../utils/api"
import { Layout } from 'antd';
import { RedoOutlined , LoadingOutlined} from '@ant-design/icons';
const { Content } = Layout;


export function HomePage() {
    const [stories, setStories] = useState<Story[]>([])
    const loadStories = async () => {
        const topStoriesIdsData = await fetchTopStoriesIds()
        const storiesData = await fetchStories(topStoriesIdsData.slice(0, 99))
        setStories(storiesData)
    }

    const [state, setState]=useState<number>(0);

    const handleClick = useCallback(()=>{
        setState(state+1)
    }, [state])

    useEffect( ()=> {loadStories();},[state])

    setTimeout(() => {
        loadStories();
    }, 60000);
    const styleHeigthP = {
        height:"100%",
    }
    const styleHeigthR = {
        height:"100%",
        width:"100%",
        position:"absolute"
    }
    return (
        <>
             <Layout style={stories.length!==0 ? styleHeigthP: styleHeigthR}>
                 {stories.length !== 0 ?  <RedoOutlined onClick={handleClick} className="Icons"/>:<LoadingOutlined className="IconsLoading" /> }
            <Content style={{margin:'2rem'}}>

                {stories.map((it, index) => (
                    <NewsItem key={it.id} id={it.id} title={it.title} score={it.score} by={it.by} time={it.time} url={it.url} index={index} />
            ))}
            </Content>
        </Layout>
</>
    )
}