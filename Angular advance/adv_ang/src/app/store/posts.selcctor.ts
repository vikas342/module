import { createFeature, createFeatureSelector } from "@ngrx/store";
import { posts } from "../model/posts.mode";


export const selctposts =createFeatureSelector<ReadonlyArray<posts>>('posts');
