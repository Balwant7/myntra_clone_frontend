import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itmesActions } from "../store/itmeSlice";
import { fetchStatusAction } from "../store/fetchstatusSlice";

const FetchStatus = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusAction.markFetchingStarted());

    fetch("https://myntra-clone-backend-2sjc.onrender.com/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(fetchStatusAction.markFetchingFinsished());

        dispatch(itmesActions.addInitialItems(items));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return <div></div>;
};

export default FetchStatus;
