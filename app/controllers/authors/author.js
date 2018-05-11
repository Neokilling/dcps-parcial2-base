import Controller from '@ember/controller';
import {computed} from "@ember/object";

export default Controller.extend({
	postsNotDeleted: computed('model.posts.@each.isDeleted', function () {
		return this.get('model.posts').filterBy('isDeleted', false);
    }),
	actions:{
		delete(post){
			post.deleteRecord();
			if(this.get('postsNotDeleted').length==0){
				this.set('model.isPostsEmpty',true);
			}
		}
	}
});
 