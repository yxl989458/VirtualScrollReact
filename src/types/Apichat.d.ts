
export interface UserSearchRecords {
    uuid: string;
    user: string;
    prompt: string;
    ref_links: Reflink[];
    search_ret_raw_text: string;
    ref_text: string;
    gen_text: string;
    generate_time: number;
    token_count: number;
    gen_successed: boolean;
    created_at: string;
    updated_at: string;
}

export interface Reflink {
    site_name: string;
    icon_url: string;
    title: string;
    url: string;
    snippet: string;
}

export interface HotSearch {
    uuid: string;
    prompt: string;
    ref_links: Reflink[];
    gen_text: string;
    generate_time: number;
    token_count: number;
    gen_successed: boolean;
    is_selected_hot: boolean;
    created_at: string;
    updated_at: string;
}

interface Reflink {
  site_name: string;
  icon_url: string;
  title: string;
  url: string;
  snippet: string;
}
