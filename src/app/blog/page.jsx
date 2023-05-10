import './blog.css'
import BlogAuthor from './components/BlogAuthor';
import BlogList from './components/BlogList';

function App() {
  return (
    <>
    <div className='blog-header'>Header</div>
    <BlogList/>
    <div className='blog-sidebar'>sidebar</div>
    <BlogAuthor/>
    </>
  )
}

export default App
