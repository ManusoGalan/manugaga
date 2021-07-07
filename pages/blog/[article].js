import { getAllFilesFrontMatter, getFileFromFolderAsHTML } from '@/lib/mdx';
import { removeArticleExtension } from '@/lib/utils/files';
import { MDXRemote } from 'next-mdx-remote';
import { Post } from '@/layouts/Post'

export async function getStaticPaths(){
    const posts = getAllFilesFrontMatter('blog');

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    article: removeArticleExtension(post.articleFile).split('/').pop()
                }
            }
        }),
        fallback: false
    }
}

export async function getStaticProps({ params }){
    const posts = getAllFilesFrontMatter('blog');
    //Search the current post index in the array of posts
    const postIndex = posts.findIndex((post) => removeArticleExtension(post.articleFile) === params.article)
    const prev = posts[postIndex + 1] || null
    const next = posts[postIndex - 1] || null
    const current = await getFileFromFolderAsHTML('blog', posts[postIndex].articleFile)

    return { props: { current, prev, next }}
}

export default function Article({ current, prev, next }) {
    return(
        <div>
            <MDXRemote {...current.transformedData} />
        </div>
    )
}