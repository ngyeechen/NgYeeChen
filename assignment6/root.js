//only allowed to modify root.js for this assignment (leave index.html and styles.css untouched)
// root.js

function PublicBlogPost() {

}

function PrivateBlogPost(props) {
  return(
    <div className="private-posts">
      <h2>{props.title}</h2>
      {/*forgot to add the meta here so that for Private post the "By XXX on XXX" will be shown. W/o it I only see "the content of this post is private".*/}
      <p className="meta">By {props.author} on {props.date}</p>

      <p>The content of this post is private.</p>

    </div>
      );
}

//Q3. create a BlogPost component
function BlogPost(props) { //non-React function: function BlogPost(title,author,date, content) {
  return(
    <div className="blog-post">
    <h2>{props.title}</h2>
    {/* <p><strong>By:</strong> {props.author}</p>
    <p><em>{props.date}</em></p> */}
    <p className="meta">By {props.author} on {props.date}</p>
    <p>{props.content}</p>
  </div>
  )
}


function BlogList({posts}) { //Q3.is it supposed to be BlogList(post) if there's only one post to be rendered?
  return( //forgot this return and it was not rendering
  //Q4.to loop through the blog posts
  //Q8 Modify the BlogList component to conditionally render PrivateBlogPost and PublicBlogPost 
    <div className="blog-list">
      {posts.map((post, index) => 
      post.isPrivate ? (
        <PrivateBlogPost
          key={index}
          title={post.title}
          author={post.author}
          date={post.date}
        />
      ) : (
        <BlogPost
          key={index}
          title={post.title}
          author={post.author}
          date={post.date}
          content={post.content}
        />
      ))}
    </div>
  );
}

//header should be its own component
function Header({ title, tagline }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{tagline}</p>
    </header>
  );
}

function Footer(props) {
  //const currentYear = new Date().getFullYear(); // if I pass foot() as props, this should be defined in App()
  return ( <footer> 
    &copy; {props.year} My Blog. All rights reserved.
  </footer> );

};

function App() {
  const currentYear = new Date().getFullYear(); 
  const blogPosts = [ 
    {
      title: 'My First Blog Post',
      author: 'John Doe',
      date: 'June 1, 2023',
      content: 'Welcome to my first blog post! Today, I want to share my journey into the world of blogging. It has been an exciting experience so far, and I can’t wait to see where this path leads me.',
      isPrivate: true
    },
    {
      title: 'My Second Blog Post',
      author: 'Jane Smith',
      date: 'June 5, 2023',
      content: 'In this post, I’m discussing the importance of work-life balance. It’s essential to find time for both professional and personal activities to maintain overall well-being.',
      isPrivate: false
    },
    {
      title: 'A Day in the Life',
      author: 'Alice Johnson',
      date: 'June 10, 2023',
      content: 'Ever wondered what a day in my life looks like? Join me as I walk you through my daily routine, from morning coffee to evening relaxation.',
      isPrivate: false
    },
    {
      title: 'Tips for Healthy Eating',
      author: 'Bob Lee',
      date: 'June 15, 2023',
      content: 'Eating healthy doesn’t have to be complicated. Here are some simple and practical tips to help you make better food choices every day.',
      isPrivate: true
    },
    {
      title: 'Traveling on a Budget',
      author: 'Susan White',
      date: 'June 20, 2023',
      content: 'Dreaming of traveling the world but worried about the cost? This post covers my top tips for seeing new places without breaking the bank.',
      isPrivate: false
    }
  ];

  //to render the header() component
  //In React, component names must start with a capital letter.
  return (
    <div>
      {/*<Header />*/}
      <Header title="My Blog" tagline="A blog about everything" />

      {/* <BlogList posts={blogPosts} /> */}

      <BlogList posts={blogPosts} />

    <Footer year={currentYear}/> 

    </div>
    );

};

const domContainer = document.getElementById('root'); //ref <div id="root"></div> in index.html
const root = ReactDOM.createRoot(domContainer);  //otherwise non-ReactDOM is domContainer.innerHTML = '<h1>Hello!</h1>';
root.render(<App />)


/* rememebr why need to add the meta in the PrivateBlogPost component?

root
 └── App
      ├── Header (needs props???)
      ├── BlogList
      │    ├── PrivateBlogPost
      │    ├── BlogPost
      │    ├── BlogPost
      │    ├── PrivateBlogPost
      │    └── BlogPost
      └── Footer

App renders:

1) <Header />

2) <BlogList posts={blogPosts} />

2.1) BlogList loops through blogPosts

2.2) If post.isPrivate === true ➔ renders <PrivateBlogPost />

2.3) Else ➔ renders <BlogPost />

3) <Footer year={currentYear} />

*/