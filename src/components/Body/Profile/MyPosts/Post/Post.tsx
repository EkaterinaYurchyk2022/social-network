import React from 'react'
import s from './Post.module.css'
import {useAppDispatch} from '../../../../../hooks/hooks'
import {deletePostAC} from '../../../../../redux/profileReducer'

type PostPropsType = {
    id: string
    message: string
    likes: number
}

export const Post: React.FC<PostPropsType> = React.memo(({id, message, likes}) => {
    const dispatch = useAppDispatch()
    const onDeleteButtonClick = () => {
        dispatch(deletePostAC(id))
    }

    return (
        <div className={s.content}>
            <img
                src="http://avotarov.ru/picture/avatarki/1/kartinki/36-2.gif"
                alt=""/>
            <span>{message}</span>
            <span>  Likes {likes}</span>
            <button onClick={onDeleteButtonClick}>X</button>
        </div>
    )
})