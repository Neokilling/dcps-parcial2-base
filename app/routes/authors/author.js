import Route from '@ember/routing/route';

export default Route.extend({
	model({id}){
		let author = this.get('store').findRecord('author',id);
		return author.then((author)=>{
			let posts = author.get('posts');
			return posts.then((postsList)=>{
				let isPostsEmpty = false;
				if(postsList.get('length')==0){
					isPostsEmpty = true;
				}
				return {
					isPostsEmpty: isPostsEmpty,
					author:author,
					posts:posts
				}
			});
		});
	}
});
