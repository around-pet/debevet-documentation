import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Individuell und einfach',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Die debevet Software ist als cloud-basierte Software auf jedem Gerät kinderleicht nutzbar und bietet
        viele individuelle Möglichkeiten für Untersuchungsvorlagen.
      </>
    ),
  },
  {
    title: 'Patientenbehandlung schnell und digital dokumentieren',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Unsere debevet Praxissoftware bietet Ihnen die Möglichkeit, individuelle Vorlagen anzulegen,
         mit denen Sie blitzschnell komplexe Behandlungen abrechnen können.
      </>
    ),
  },
  {
    title: 'Buchhaltung einfach wie nie',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Mit verschiedenen Erweiterungsmöglichkeiten macht Ihre Buchhaltung sich fast wie von allein! Sparen Sie
        Zeit und Mühe, Ihr Steuerberater wird Sie lieben.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
