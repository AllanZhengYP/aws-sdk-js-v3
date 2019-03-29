/**
 * <p>Information about a new BGP peer.</p>
 */
export interface _NewBGPPeer {
    /**
     * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
     */
    asn?: number;

    /**
     * <p>The authentication key for BGP configuration.</p>
     */
    authKey?: string;

    /**
     * <p>The address family for the BGP peer.</p>
     */
    addressFamily?: 'ipv4'|'ipv6'|string;

    /**
     * <p>The IP address assigned to the Amazon interface.</p>
     */
    amazonAddress?: string;

    /**
     * <p>The IP address assigned to the customer interface.</p>
     */
    customerAddress?: string;
}

export type _UnmarshalledNewBGPPeer = _NewBGPPeer;