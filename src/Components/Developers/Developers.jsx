import React, { useContext, useEffect, useState } from 'react';
import styles from "./Developers.module.css"
import DeveloperItem from "../UserCard/developerItem";
import axios from "axios";
import Button from "../Button/Button";
import { RefreshCard } from "../../App";

const Developers = () => {
    const [page, setPage] = useState({ page: 1, count: 6 });
    const [list, setList] = useState([]);
    const [hasNextPage, setHasNextPage] = useState(false);

    const { shouldRefresh, setShouldRefresh } = useContext(RefreshCard);

    useEffect(() => {
        getListDeveloper(page.page, page.count);
    }, [page.page]);

    useEffect(() => {
        try {
            addUser();
        } catch (e) {
            console.error(e);
        }
    }, [shouldRefresh]);

    console.log(list, "list");

    const hesNextPage = (totalPages) => {
        const nextPageExists = page.page < totalPages;
        setHasNextPage(nextPageExists);
    };

    const incrementPage = () => {
        console.log(page);
        setPage((prevPage) => ({ ...prevPage, page: prevPage.page + 1 }));
    };

    const addUser = async () => {
        if (shouldRefresh) {
            console.log("addUser");
            const url = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=1`;
            const developer = await axios.get(url);
            const mergeArr = [developer.data.users[0], ...list];
            setList(mergeArr.slice(0, -1));
            setShouldRefresh(false);
        }
    }

    const getListDeveloper = async (page, count) => {
        const url = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`;
        const developers = await axios.get(url);

        try {
            if (!list.length) {
                hesNextPage(developers.data.total_pages);
                setList(developers.data.users);
            } else {
                setList((prevList) => [...prevList, ...developers.data.users]);
                hesNextPage(developers.data.total_pages);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.developerSection}>
            <div className={styles.developerWrapper}>
                <p className={styles.developerWrapperContent}>
                    Working with GET request
                </p>
                <div className={styles.developerList}>
                    {list.length ? list.map((item, index) => (
                        <DeveloperItem key={`${item.id}-${index}`}
                                       photo={item.photo}
                                       name={item.name}
                                       position={item.position}
                                       email={item.email}
                                       phone={item.phone}
                        />
                    )) : null}
                </div>
                <div className={styles.developerBtnSection}>
                    {hasNextPage ?
                        <Button text={"Show more"} onClick={incrementPage} className={styles.developerBtn} />
                        :
                        <Button text={"Show more"} className={styles.developerBtnDisable} disabled={"disabled"} />}
                </div>
            </div>
        </div>
    );
};

export default Developers;
