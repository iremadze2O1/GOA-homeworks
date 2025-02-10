import random

def random_groups(members, leaders):
    random.shuffle(members)
    random.shuffle(leaders)
    groups = {}
    for leader in leaders:
        groups[leader] = []
    
    for i in range(len(members)):
        leader = leaders[i % len(leaders)]
        groups[leader].append(members[i])
    
    for j in groups:
        print(f"leader {j}: {", ".join(groups[j])}")

members_list = ["mate chikaidze", "giga kochalidze", "zuka qoridze", "gio mindorashvili", 
                "rati chigogidze", "ilia iremadze", "davit mefarishvili", "lasha giorgi azaladze", 
                "luka tatuashvili", "nika macharashvili", "ilia dzindzibadze"]
leaders_list = ["Kote Ximshiashvili", "Davit Adeishvili", "Data Popxadze", "Gobron Witlauri", 
                "Nata Kvantaliani", "Giorgi Shavadze"]

random_groups(members_list, leaders_list)
