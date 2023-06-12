import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useMemo,
} from 'react';

// import Cookies from 'js-cookie';
import { useLocation, useNavigate } from 'react-router-dom';

const Context = createContext({});

export function useProviderContext() {
  return useContext(Context);
}

const json_format = {
  'order-mfe': {
    orders: {
      'accordion-form-wizard': {},
    },
    'order-dashboard': {},
  },
  'customer-mfe': {
    'customer-details': {},
    'customer-dashboard': {},
  },
};

const ProviderComponent = (props) => {
  const [contextData, setContextData] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const contextId = props?.contextId;
  // const useCookies = props?.useCookies;
  console.log('mfe contextId in order mfe', contextId);

  useEffect(() => {
    const session = JSON.parse(sessionStorage.getItem('contextData'));
    if (session) {
      setContextData(session['order-mfe']);
      const lastVisitedUrl = session['order-mfe']['orders']['lastVisitedUrl'];
      const { pathname } = location;
      lastVisitedUrl !== pathname && navigate(lastVisitedUrl);
    }
    if (contextId) {
      fetch(
        `https://csc-agent-platform-service-qa1.lower.internal.sephora.com/csc-agent-platform-service/v1/context/${contextId}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log('Context Data' + data);
          setContextData(data['order-mfe']);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, []);

  const handlePost = (data, key, location) => {
    const body = {
      ...json_format,
    };
    body['order-mfe']['orders']['lastVisitedUrl'] = null;
    const { pathname } = location;
    const originalPathname = window.location.pathname.split('/');
    const previousPathname = pathname.split('/');
    if (originalPathname[1] !== previousPathname[1]) {
      body['order-mfe']['orders']['lastVisitedUrl'] = pathname;
    }
    if (data && key) {
      body['order-mfe']['orders'][key] = {
        result: data,
      };
    }

    setContextData(body['order-mfe']);
    if (contextId) {
      sessionStorage.setItem('contextData', JSON.stringify(body));
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      };
      fetch(
        `https://csc-agent-platform-service-qa1.lower.internal.sephora.com/csc-agent-platform-service/v1/context/${contextId}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          console.log('Updated context in service' + data);
        });
    }
  };

  const orderState = useMemo(
    () => ({
      contextData,
      setContextData,
      callback: (data, key) => {
        handlePost(data, key, location);
      },
    }),
    [contextData, setContextData, location]
  );

  console.log('Context Data inside Order MFE', contextData);
  return (
    <Context.Provider value={orderState}>{props.children}</Context.Provider>
  );
};

export default ProviderComponent;
