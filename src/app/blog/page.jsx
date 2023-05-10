import './blog.css'
import BlogList from './components/BlogList';

function App() {
  return (
    <>
    <div className='blog-header'>Header</div>
    <BlogList/>
    <div className='blog-sidebar'>sidebar</div>
    <div className='blog-author-info'>author</div>
    </>
  )
}

export default App
