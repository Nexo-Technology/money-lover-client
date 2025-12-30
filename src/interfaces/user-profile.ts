export interface ClientSettings {
  is_done_intro_home: boolean;
  segment_user_ui_type: number;
  ob_step_add_budget: boolean;
  ob_step_get_it: boolean;
  ob_step_add_transaction: boolean;
  ob_budget_suggest_show: boolean;
  is_show_step_view_for_user: boolean;
  ob_step_create_wallet: boolean;
  ob_step_closed: boolean;
  main_currency: string;
  su: boolean;
  nps__last_ask: number;
  ls: number;
  om: number;
  sb: number;
  er: boolean;
  fmy: number;
  fdw: number;
  pl: number;
  av: number;
  dr: number;
  fd: number;
  df: number;
  l: string;
  ps: number;
  ds: number;
  sa: boolean;
  sc: boolean;
  sd: boolean;
  show_advance_add_transaction: boolean;
  future_period: number;
  ol: boolean;
  sl: boolean;
  is_done_intro_money_insider_home: boolean;
  is_done_intro_money_insider_detail: boolean;
  update_password_fb: string; // Note: Value is "false" as a string in JSON
  is_done_tooltip_txn_ai_add_trans: boolean;
  is_done_tooltip_txn_ai_home: boolean;
}

export interface UserProfile {
  _id: string;
  email: string;
  icon_package: any[]; // Specified as empty array in JSON
  limitDevice: number;
  tags: string[];
  client_setting: ClientSettings;
  purchased: boolean;
  subscribeProduct: string;
  deviceId: string;
}
