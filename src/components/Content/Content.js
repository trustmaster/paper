import React from 'react';

import Post from './Post';

class Content extends React.Component {
    render() {
        return (
            <div className="Content">
                <div className="Page">
                    <h1>My blog on paper</h1>
                    <p><em>This blog is all about cats, for cats, written by other cats.</em></p>

                    <Post
                        title="How I got my first cat"
                        date="November 4th, 2013"
                    >
                        <p>In Mid-September, Marimon from <a href="#">Kanagawa Prefecture, Japan</a> was out walking her dog in a park near her house. She saw a kitten wandering <em>alone without a mom</em>.</p>

                        <p><blockquote>"He couldn't have arrived alone. The only female cat that lives in the park, has been spayed,"</blockquote> Marimon shared with Love Meow.</p>

                        <p>The kitten most likely had been abandoned. Marimon took him home so he could have a safe place to stay and food to eat. "He was about 1 1/2 to two months old. He was given antibiotics for a cold and treated for fleas."</p>
                    </Post>

                    <Post
                        title="How I got my second cat"
                        date="June 10th, 2018"
                    >
                        <p>The kitten hadn't been properly weaned so the family mixed kitten milk with food to help him eat. "10 minutes after he finished the food, he suddenly started meowing, and even let me touch him and hold him," Marimon wrote.</p>

                        <p>For the first few days, the kitten stayed in a nursery pen. At night, he would cry nonstop as he didn't want to be alone. Some of their resident cats would come over and stay outside the nursery pen to keep him company.</p>

                        <p>In the back of their mind, they wondered if there were more kittens in the park and perhaps, this ginger boy was missing his siblings. Marimon decided to go back to search for others.</p>
                    </Post>

                    <Post
                        title="New Post"
                        date="November 3rd, 2019"
                    >
                        <p>
                            Inserting new content here...
                        </p>
                        <button>Save</button>
                    </Post>
                </div>
            </div>
        );
    }
}

export default Content;