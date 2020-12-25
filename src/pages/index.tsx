import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: '查看我的简历',
    imageUrl: 'img/winter_tree.svg',
    description: (
      <>
        没什么好说的，一个帅字贯穿一生
      </>
    ),
    url: 'resume/'
  },
  {
    title: '想知道我怎么理财吗',
    imageUrl: 'img/candle.svg',
    description: (
      <>
        总的来说是亏的
      </>
    ),
    url: 'blog/'
  },
  {
    title: '查看我的知识文档',
    imageUrl: 'img/champagne.svg',
    description: (
      <>
        工作和学习的总结
      </>
    ),
    url: 'docs/'
  },
];

function Feature({ imageUrl, title, description, url }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <Link className={styles.weightFont} to={useBaseUrl(url)}>{title}</Link>
      <p style={{ textAlign: 'center' }}>{description}</p>
    </div>
  );
}

const Home: React.FC<{}> = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={'主页'}
      description="hemengke的个人网站">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">hemengke1997</h1>
          <p className="hero__subtitle">TOO FAST TO LIVE , TOO YOUNG TO DIE</p>
          <Link
            className={clsx(
              'button button--outline button--secondary button--lg',
            )}
            to='https://www.yuque.com/hemengke'>
            前往语雀
            </Link>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
