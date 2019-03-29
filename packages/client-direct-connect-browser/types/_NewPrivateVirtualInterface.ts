/**
 * <p>Information about a private virtual interface.</p>
 */
export interface _NewPrivateVirtualInterface {
    /**
     * <p>The name of the virtual interface assigned by the customer network.</p>
     */
    virtualInterfaceName: string;

    /**
     * <p>The ID of the VLAN.</p>
     */
    vlan: number;

    /**
     * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
     */
    asn: number;

    /**
     * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.</p>
     */
    mtu?: number;

    /**
     * <p>The authentication key for BGP configuration.</p>
     */
    authKey?: string;

    /**
     * <p>The IP address assigned to the Amazon interface.</p>
     */
    amazonAddress?: string;

    /**
     * <p>The IP address assigned to the customer interface.</p>
     */
    customerAddress?: string;

    /**
     * <p>The address family for the BGP peer.</p>
     */
    addressFamily?: 'ipv4'|'ipv6'|string;

    /**
     * <p>The ID of the virtual private gateway.</p>
     */
    virtualGatewayId?: string;

    /**
     * <p>The ID of the Direct Connect gateway.</p>
     */
    directConnectGatewayId?: string;
}

export type _UnmarshalledNewPrivateVirtualInterface = _NewPrivateVirtualInterface;