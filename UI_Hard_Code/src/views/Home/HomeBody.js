import React from 'react';
import CourseSelectionContainer from '../../container/CourseSelectionContainer';
import TopCategoriesContainer from '../../container/TopCategoriesContainer';
import FeaturedTopicsContainer from '../../container/FeaturedTopicsContainer';
import AdvertisementContainer from '../../container/AdvertisementContainer';
import CopyStudentsViewingContainer from '../../container/StudentsViewingContainer';
import Header from '../../components/Header/Header';
import CategoryList from '../../container/CategoryList';

const HomeBody = () => {
    return (
        <div>
            <CategoryList />
            <Header />
            <CourseSelectionContainer />
            <CopyStudentsViewingContainer />
            <TopCategoriesContainer />
            <FeaturedTopicsContainer />
            <AdvertisementContainer />
        </div>
    );
};

export default HomeBody;