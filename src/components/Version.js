import {FormattedMessage} from 'react-intl';

function Version(props) {
  return (
    <div id="home-splash">
      <h1>
        <FormattedMessage id="welcome" values={{ appName: props.appData.title }} />
        <small> ({props.appData.version})</small>!
      </h1>
      <p><FormattedMessage id="what-is-this-app" /></p>
      <p><FormattedMessage id="app-purpose" /></p>
      <button type="button"><FormattedMessage id="nav-newgame" /></button>
    </div>
  );
}

export default Version;
