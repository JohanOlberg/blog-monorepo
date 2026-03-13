import {  Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { PostListPage } from '../../pages/PostListPage/PostListPage'
import {NotFoundPage} from  '../../pages/NotFoundPage/NotFoundPage'
import { routes } from './routes'

export function AppRouter(){
return (

        <Routes>
            <Route element={<MainLayout />}>
                {/* <Route path={routes.home} element={<HomePage />} /> */}
                <Route path={routes.posts.list} element={<PostListPage/>} />
                {/* <Route path={routes.posts.detailPath} element={<PostPageDetail/>}/> */}
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>

)

}