// Ambient ts
// This is just a file that gives type (and autocompletion) to the index.js
// It means that this file is not included in runtime execution

declare type User = {
    bio?: string,
    confirmPassword?: string,
    email?: string,
    password?: string,
    photo?: string,
    username?: string
}

export function getAllUsers() : Promise<User[]>
export function getUserById(userUuid: string): Promise<User>
export function createUser(form: User): Promise<User>
export function updateUser(email: string, newData: User): Promise<User>

declare type Reaction = {
    type?: "LIKE" | "DISLIKE",
    userId?: string
}

export function getReaction(postUuid: string): Promise<Reaction>
export function sendReactionToPost(postUuid: string,data: Reaction): any
export function deleteAReaction(postUuid: string,data: Reaction): any


declare type Post = {
    id?: string,
    title?: string,
    content?: string
}

export function getPosts(): Promise<Post[]>

export function getPostById(uuid: string): Promise<Post>

export function createPostOrUpdate(post: Post): any
