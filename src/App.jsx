import React, { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CircularProgress, Flex } from "@chakra-ui/react";

const HomePage = lazy(() => import("./pages/home/home"));
const Photo = lazy(() => import("./pages/Photo/Photo"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const LoginPage = lazy(() => import("./pages/auth/login"));
const Mypage = lazy(() => import("./pages/Mypage/Mypage"));
const Email = lazy(() => import("./pages/Email/Email"));

const PageLoading = () => {
  return (
    <Flex justifyContent="center" alignItems="center" height="100%">
      <CircularProgress
        isIndeterminate
        thickness="6px"
        size="150px"
        color="#4a65f6"
      />
    </Flex>
  );
};

export default function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoading />}>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/Photo" component={Photo} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Mypage" component={Mypage} />
          <Route path="/Email" component={Email} />
          <Route path="/login" component={LoginPage} />
          <Route path="*" component={() => <div>Not Found</div>} />
        </Switch>
      </Suspense>
    </Router>
  );
}
