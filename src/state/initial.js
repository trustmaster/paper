const initialState = {
    title: 'My Blog on Paper',
    description: 'Minimalist blog writing and display as if I was writing it on paper',
    posts: [
        {
            'title': 'Journaling as a mindfulness technique',
            'date': new Date('2019-12-04'),
            'text': '<p>This post should consist of multiple paragraphs.</p><p>The only purpose of this text is to demonstrate some features of the editor, such as <strong>bold</strong>, or <em>italics</em>.</p><p>It is worth noticing that formatting is minimal to serve the original idea of focusing on contents rather than form. Should it also contain lists, tables, hyperlinks and media? Lists maybe, tables probably not.</p><p>Hypermedia is temporal, and is subject to change up to vanishing. Thus, hypermedia should not be part of the MVP.</p>',
        },
        {
            'title': 'What you see is what you create',
            'date': new Date('2019-12-21'),
            'text': '<p>We may think that everything is already inveneted, everything new is well forgotton old. This is true and not so true. Yes, the history continues to repeat itself over and over again. But it does not mean that we should stay passive and float with the go.</p><p>Unwinding creativity within ourselves can help us to get closer with our understanding of the meaning of life.</p><p>Some ancients said: <blockquote>Everything flows, there is no way to enter the same river again. So, you should embrace this very moment and head towards the future. However, history is the best teacher, and the past is not to be forgotten.</blockquote></p><p>It may seem unimportant to express yourself as the days go by and we chase our cravings and forget what is our true self. But with the time comes regret, and the taste of it is bitter. Sweet is the hard work of self-improvement and restless creation, and it only gets better with time.</p>',
        },
    ],
};

export default initialState;
