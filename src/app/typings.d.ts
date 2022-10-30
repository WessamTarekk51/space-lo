
export interface jsonFile  {
  items: value[];
  location_value: string;
}
export interface value {
  active: boolean,
  id: number,
  label_up: content[]
  inner_table: table[]
  label_down:content[]
}
export interface content {
  content:content_table[]
}
export interface content_table {
  parag: string,
  Length: number;
  input: valid,
  marker: string,
}
export interface table {
 content:inner_table[]
}
export interface inner_table {
  parag: string,
  Length: number;
  input: valid,
  marker: string,
  line: boolean
}

export interface valid {
  valid: string[]
}



