import {  Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

import { BoxListContainer } from "../../features/post/list/components/BoxListContainer";
import { PostDetail } from "../../features/post/details/components/PageDetailPost";
import { About } from '../../features/about/components/About';
import {NotFoundPage} from  '../../pages/NotFoundPage/NotFoundPage'
import { routes } from './routes'

export function AppRouter(){
return (

        <Routes>
            <Route element={<MainLayout />}>
                {<Route path={routes.home} element={<BoxListContainer/>} />}
                <Route
                    path={routes.posts.detailPath}
                    element={<PostDetail />}
                />
                <Route
                    path={routes.about}
                    element={<About />}
                />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>

)

}