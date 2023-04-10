export interface StripeItem {
    id:                  string;
    object:              string;
    active:              boolean;
    billing_scheme:      string;
    created:             number;
    currency:            string;
    custom_unit_amount:  null;
    livemode:            boolean;
    lookup_key:          null;
    metadata:            Metadata;
    nickname:            null;
    product:             Product;
    recurring:           Recurring;
    tax_behavior:        string;
    tiers_mode:          null;
    transform_quantity:  null;
    type:                string;
    unit_amount:         number;
    unit_amount_decimal: string;
}

export type Metadata = {
    category: "gpu" | "storage" | "laptop" | "graphic card" | "ram"
}

export interface Product {
    id:                   string;
    object:               string;
    active:               boolean;
    attributes:           any[];
    created:              number;
    default_price:        string;
    description:          string;
    images:               string[];
    livemode:             boolean;
    metadata:             Metadata;
    name:                 string;
    package_dimensions:   null;
    shippable:            null;
    statement_descriptor: null;
    tax_code:             null;
    type:                 string;
    unit_label:           null;
    updated:              number;
    url:                  null;
}

export interface Recurring {
    aggregate_usage:   null;
    interval:          string;
    interval_count:    number;
    trial_period_days: null;
    usage_type:        string;
}