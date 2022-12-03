import { useLocalObservable } from "mobx-react-lite";
import { debounce } from "debounce";
import { IViewModel, ViewModelAction, ViewModelStatus } from "@/lib/viewModels";
import { FlatListActions, FlatListStatus } from "@/components";
import { Page, PageType } from "@/lib/pagination";
import { IRestfulApiService } from "@/lib/apiService";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { GlobalConfigStoreType } from "@/hooks/useConfig";
import { LicenseListItemData, LicenseListItemMetadata } from "./LicenseList";
import { LicenseStoreType } from "./LicenseModel";
import { SlotUsed } from "../libraries/SlotUsedModel";
import { slotsFactory } from "../../factories/SlotsFactory";
import { PRODUCTS_DETAIL_PAGE, SHOP_CHECKOUT_PAGE } from "@/settings/constant";

type LicenseListViewModelProps = {
  apiService?: IRestfulApiService;
  router?: ReturnType<typeof useRouter>;
  config?: GlobalConfigStoreType;
  rootStore?: LicenseStoreType;
};

type LicenseListViewModelStatus = ViewModelStatus &
  FlatListStatus & {
    showSlotList: boolean;
  };

type LicenseListViewModelActions = ViewModelAction &
  FlatListActions<LicenseListItemData, LicenseListItemMetadata> & {
    getPagination: () => PageType;
    updatePageChange: (pageIndex: number) => void;
    onUpgradeClick: () => void;
    getSelected: () => LicenseListItemData;
    onEmptyClick: () => void;
    get slotUseds(): SlotUsed[];
  };

interface LicenseListViewLocalStore {
  _slotUseds: SlotUsed[];
  _items: LicenseListItemData[];
  selected: LicenseListItemData;
  paging: PageType;
}

type ILicenseListViewModel = IViewModel<
  LicenseListViewModelProps,
  LicenseListViewModelStatus,
  LicenseListViewModelActions
>;

export const LicenseListViewModel: ILicenseListViewModel = ({
  apiService,
  config,
  router,
  rootStore,
}) => {
  const status = useLocalObservable<LicenseListViewModelStatus>(() => ({
    addingItems: false,
    errors: [],
    initialized: false,
    loading: false,
    refreshing: false,
    showSlotList: false,
  }));

  // * useLocalObservable :: Local Obeservable State를 만들기 위한 hook
  /*
When using useLocalObservable, all properties of the returned object will be made observable automatically,
getters will be turned into computed properties, and methods will be bound to the store and apply mobx transactions automatically.
If new class instances are returned from the initializer, they will be kept as is.
*/
  // Routing 처리 같은 경우에도 여기서 로직 생성
  const actions = useLocalObservable<
    LicenseListViewModelActions & LicenseListViewLocalStore
  >(() => ({
    _slotUseds: [],
    _items: [],
    paging: Page({ pageSize: config?.defaultPageLimit || 10 }),
    selected: undefined,

    initialize(props: {}): void {
      actions.paging.setCurrent(0, 5, 35);
      actions._slotUseds = slotsFactory(20);
      status.initialized = true;
      status.loading = false;
    },
    dispose(): void {},

    // gets value from the collection with key
    get items(): LicenseListItemData[] {
      if (rootStore) {
        return rootStore?.licenses?.licenses.map((license) => {
          return {
            ...license,
            license,
          } as LicenseListItemData;
        });
      } else {
        return actions._items;
      }
    },
    getPagination(): PageType {
      return actions.paging;
    },
    updatePageChange(pageIndex: number): void {
      console.log("updatePageChange", pageIndex);
      const next = actions.paging.next(pageIndex);
      actions.paging.setCurrent(next.offset, next.limit, next.total);
    },
    getSelected(): LicenseListItemData {
      return actions.selected;
    },

    // gets value from the collection with key
    get slotUseds(): SlotUsed[] {
      return actions._slotUseds;
    },

    async onItemClick({ item, metadata }) {
      if (metadata) {
        const { action } = metadata;

        console.log("action", action);
        //@todo push오류
        // this.onUpgradeClick()
        switch (action) {
          case "show":
            status.showSlotList = true;
            // alert(JSON.stringify(item))
            break;
          case "upgrade":
            router?.push(`${PRODUCTS_DETAIL_PAGE}/${item.id}`);
            break;
          case "purchase":
            break;
          case "renew":
            router?.push(SHOP_CHECKOUT_PAGE);
            break;
          case "cancel":
            break;
        }
      }
    },
    onUpgradeClick(): void {
      router.push(SHOP_CHECKOUT_PAGE);
    },
    onEmptyClick() {},
    onLoadMore: debounce(
      async () => {
        status.addingItems = true;

        try {
        } catch (e) {}

        status.addingItems = false;
      },
      300,
      true
    ),
    onRefresh: debounce(
      async () => {
        status.refreshing = true;
        try {
        } catch (e) {}

        // const { success, resultCode } = await new FetchNewsCommand(news).execute()
        status.refreshing = false;
      },
      300,
      true
    ),
  }));

  useEffect(() => {
    actions.initialize({});
  }, []);

  return useLocalObservable(() => ({
    status,
    actions,
  }));
};

export type LicenseListViewModelType = ReturnType<typeof LicenseListViewModel>;
