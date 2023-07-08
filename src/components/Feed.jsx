import { useState, useEffect } from 'react';
import { Box, Stack, Typography} from '@mui/material';
import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('Trending Movies');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
    }, [selectedCategory])

    return (
        <Stack 
            sx={{ flexDirection: 
            { sx: "column", md: "row"} }}
            >
                <Box sx={{ height: {sx: 'auto', md: '85vh'}, borderRight: "1px solid #3d3d3d", 
                px: {sx: 0, md: 2}}}>
                    <Sidebar 
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                    <Typography 
                        className="copyright" 
                        variant="body2" 
                        sx={{ mt: 1.5, color: "#fff"}}
                        >
                        All right reserved Reyajul Islam &copy; 2023 
                    </Typography>
                </Box>

                <Box p={2} sx={{ overflowY: 'auto', height: '85vh', flex: 2,
                            flexDirection: {md: 'column'},
                            scrollbarColor: 'gray black',
                            scrollbarWidth: 'thin'
                    }}>
                    <Box display="flex" p="2">
                        <Box sx={{ mr: { sm: '70px'} }} />
                        <Typography variant="h4"
                        fontWeight="bold" mb={2} sx={{ color: '#fff'}}>
                            { selectedCategory } <span style={{ color: '#f31503'}}></span>
                        </Typography>
                    </Box>

                    <Box display="flex" p="2">
                        <Box sx={{ mr: { sm: '90px'} }} />
                        <Videos videos={videos}/>
                    </Box>
                </Box>
        </Stack>
    );
}

export default Feed;