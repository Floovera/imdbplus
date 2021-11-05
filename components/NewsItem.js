import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/NewsItem.module.scss"



const NewsItem = ({ data, level }) => {
  var movies = [];
  var personalities = [];
  //enriching data
  if (level === 'data') {
    var content = data.story.content;
    movies = data.rels.filter(obj => {
      return content.movies.includes(obj.uuid);
    });
    personalities = data.rels.filter(obj => {
      return content.personalities.includes(obj.uuid);
    });
  } else {
    var content = data;
  }

  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.newsitem}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div className={styles.short}>
            {render(content.short)}
          </div>
          <div className={styles.article}>
            {render(content.article)}
          </div>
          <div>
            {movies.map((item, index) => (
              <div>
                <a href={`/${item.full_slug}`} className="">{item.name}</a>
              </div>
            ))}
          </div>
          <div>
            {personalities.map((item, index) => (
              <div>
                <a href={`/${item.full_slug}`} className="">{item.name}</a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </SbEditable>
  )
}

export default NewsItem
