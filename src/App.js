import { AuthProvider } from "contexts/auth-context";
import SignUpPage from "pages/SignUpPage";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
