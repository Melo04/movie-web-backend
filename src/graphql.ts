
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Movie {
    id: string;
    title: string;
    poster_path: string;
    popularity: number;
    vote_average: number;
    overview: string;
    release_date: string;
    production_companies: Company[];
    genres: Genre[];
}

export class TvSeries {
    id: string;
    name: string;
    poster_path: string;
    popularity: number;
    vote_count: number;
    overview: string;
    first_air_date: string;
    production_companies: Company[];
    genres: Genre[];
    seasons: Seasons[];
}

export class PopularMovies {
    id: string;
    title: string;
    poster_path: string;
    popularity: number;
    vote_count: number;
    overview: string;
    release_date: string;
    vote_average: number;
    production_companies: Company[];
    genres: Genre[];
}

export class Company {
    id: string;
    logo_path?: Nullable<string>;
    name: string;
    origin_country: string;
}

export class Genre {
    id: string;
    name: string;
}

export class Seasons {
    id: string;
    name: string;
    overview: string;
    air_date: string;
    episode_count: number;
    poster_path?: Nullable<string>;
    season_number: number;
}

export class AuthorDetails {
    name?: Nullable<string>;
    username?: Nullable<string>;
    avatar_path?: Nullable<string>;
    rating?: Nullable<number>;
}

export class Reviews {
    id: string;
    author_details: AuthorDetails;
    content: string;
    created_at: string;
}

export class AddMovieRatings {
    code?: Nullable<number>;
    success: boolean;
    message?: Nullable<string>;
    rating?: Nullable<number>;
}

export class AddTvRatings {
    code?: Nullable<number>;
    success: boolean;
    message?: Nullable<string>;
    rating?: Nullable<number>;
}

export abstract class IQuery {
    abstract movies(): Movie[] | Promise<Movie[]>;

    abstract movie(id: string): Movie | Promise<Movie>;

    abstract tvseries(): TvSeries[] | Promise<TvSeries[]>;

    abstract series(id: string): TvSeries | Promise<TvSeries>;

    abstract reviews(id: string): Reviews[] | Promise<Reviews[]>;

    abstract popularmovies(): PopularMovies[] | Promise<PopularMovies[]>;
}

export abstract class IMutation {
    abstract addMovieRatings(id: string, rating: number): AddMovieRatings | Promise<AddMovieRatings>;

    abstract addTvRatings(id: string, rating: number): AddTvRatings | Promise<AddTvRatings>;
}

type Nullable<T> = T | null;
