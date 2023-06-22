// creating posts
// commenting posts
// sharing posts
// Admin  - 3
// Regular -2

interface Post {
  title: string;
  content: string;
}

interface Comment {
  title: string;
  content: string;
}

interface PostCreator {
  createPost(post: Post): void;
}

interface CommentCreator {
  createComment(comment: Comment): void;
}

interface PostSharer {
  sharePosts(post: Post): void;
}

class Admin implements PostCreator, CommentCreator, PostSharer {
  createPost(post: Post): void {
    console.log("Admin is creating  a post");
  }

  createComment(comment: Comment): void {
    console.log("Admin is creating  a comment");
  }

  sharePosts(post: Post): void {
    console.log("Admin is sharing a post");
  }
}

class RegularUser implements CommentCreator, PostSharer {
  createComment(comment: Comment): void {
    console.log("Regular User is creating  a comment");
  }

  sharePosts(post: Post): void {
    console.log("Regular User is sharing a post");
  }
}
