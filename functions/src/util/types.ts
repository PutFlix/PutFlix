import * as firebase from 'firebase-admin';

export type FileMetadata = MovieMetadata;
export type MovieMetadata = { [k: string]: any };
export type SeriesMetadata = MovieMetadata;
export type SeasonMetadata = SeriesMetadata;

export interface DedupeEntry {
    reference: number;
    season_reference?: number;
    series_reference?: number;
    type: MediaType;
    name: string;
    series_name?: string;
    season_number?: number;
    episode_number?: number;
}

export interface IndexingQueueEntry<T> {
    last_changed: firebase.firestore.Timestamp;
    status: QueueStatus;
    payload: T;
}

export interface TmdbQueueEntry extends IndexingQueueEntry<TmdbQueuePayload> {
    key: string;
}

export interface TmdbQueuePayload {
    account_id: string;
    file: UncategorizedFile;
}

export interface Item<M> {
    created_at: firebase.firestore.Timestamp;
    crc32: string;
    filename: string;
    is_mp4_available: boolean;
    mime: string;
    metadata: M | null;
    putio_id: number;
    size: number;
}

export const enum MediaType {
    Episode = "episode",
    Movie = "movie",
    Season = "season",
    Series = "series",
}

export interface Movie extends Item<MovieMetadata> {}

export const enum QueueStatus {
    Errored = 'errored',
    Processing = 'processing',
    Waiting = 'waiting',
    FetchingMetadata = 'fetching_metadata',
}

export interface Series {
    metadata: SeriesMetadata;
}

export interface Season {
    metadata: SeasonMetadata;
}

export interface UncategorizedFile extends Item<FileMetadata> {}
